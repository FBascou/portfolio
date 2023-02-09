export const yearsArray: any[] = [
  { id: 0, header: 2011 },
  { id: 1, header: 2015 },
  { id: 2, header: 2018.1 },
  { id: 3, header: 2018.2 },
  { id: 4, header: 2020 },
  { id: 5, header: 2021 },
  { id: 6, header: 2022 },
];

export const yearsArraySorted = yearsArray.sort((a, b) => b.header - a.header);
