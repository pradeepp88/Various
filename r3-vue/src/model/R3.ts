import store from '@/store';

export function postData(url: string, dto: any): Promise<any> {
  console.log('R3 - poastData called');
  return fetch(store.state.apiURL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': store.state.languageString,
    },
    body: JSON.stringify(dto),
  }).then((r) => {
    if (r.ok) {
      return r.json();
    }

    r.json().then((rjsonify: any) => {
      // TODO: Implement error signal to UI.
      // console.log('Error');
      // console.log(JSON.stringify(r, null, 2));
    });

    throw new Error(`Error in POST to ${url}.`);
  });
}
