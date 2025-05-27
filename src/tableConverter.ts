export function tableConverter(element: HTMLDivElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `<table>
      <tr>
        <td>Esta doendo doutor skummel</td>
      </tr>
    </table>
    `;
    // element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
