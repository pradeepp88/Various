<template>
  <v-container fill-height fluid>
    <v-layout column fill-height justify-center align-center>
      <v-icon class="fas fa-code" large></v-icon>
      <h1>R3 SPA</h1>

      <v-divider class="mb-4"></v-divider>
      <v-form dark>
        <v-text-field
          v-model="usrname"
          :counter="25"
          label="User Name"
          placeholder="Admin"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
          placeholder="*****"
          required
        ></v-text-field>
      </v-form>
      <v-flex xs1>
        <v-switch :label="languageLabel" color="indigo" v-model="isLanguageEnglish"></v-switch>
      </v-flex>

      <v-btn @click="login">Login</v-btn>
    </v-layout>

    <v-dialog v-model="isLoginFailPopup" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Login Fail</v-card-title>
        <v-card-text>User Name/Password Incorrect.</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="isLoginFailPopup = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <LoadingDialog :loading="loading"></LoadingDialog>
  </v-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import * as R3 from '@/model/R3.ts';
import Agent from '@/model/Agent';
import LoadingDialog from '@/components/LoadingDialog.vue';
import HttpService from '@/services/HttpService';

@Component({ components: { LoadingDialog } })
export default class LoginPage extends Vue {
  public name: string = 'login';
  public usrname: string = '';
  public loading: boolean = false;

  private password: string = '';
  private isLoginFailPopup: boolean = false;
  private isLanguageEnglish: boolean = false;

  private httpService: HttpService;

  constructor() {
    super();
    this.httpService = new HttpService();
  }
  get languageLabel(): string {
    return this.isLanguageEnglish ? 'Français' : 'English';
  }

  public login(): void {
    this.$store.commit('setLanguage', this.isLanguageEnglish);
    this.loading = true;

    this.authenticateLogin();
    //this.R3Login();
  }

  private authenticateLogin() {
    console.log(`authenticateLogin called with username: ${this.usrname} and password: ${this.password}`);
    var login = {
      username: this.usrname,
      password: this.password,
    };

    this.httpService.postAsync('/api/login', login).then((dto: any) => {
      this.loading = false;
      this.mapDtoToStore(dto);
      this.$emit('authenticated');
    });
  }

  private mapDtoToStore(dto: any): void {
    if (!dto) {
      throw new Error('cannot map empty object!');
    }
    const agents: Agent[] = [];
    const defaultAgent: Agent = this.newAgentFromDto(dto.DefaultAgent);
    const eligibleAdvisors: any[] = dto.EligibleAdvisors;

    for (const advisor of eligibleAdvisors) {
      agents.push(this.newAgentFromDto(advisor));
    }

    this.$store.commit('setCredentials', {
      token: dto.AccessToken.Token,
      defaultAgent,
      agents,
    });
  }

  private newAgentFromDto(dtoAgent: any): Agent {
    return new Agent(
      dtoAgent.Key,
      dtoAgent.AgentId,
      dtoAgent.DealerCode,
      dtoAgent.Code,
      dtoAgent.LastName,
      dtoAgent.FirstName,
    );
  }
}
</script>
