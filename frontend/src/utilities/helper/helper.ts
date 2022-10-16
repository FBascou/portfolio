export const yearsArray: any[] = [
  { id: 1, year: 2011 },
  { id: 2, year: 2015 },
  { id: 3, year: 2017 },
  { id: 4, year: 2018 },
  { id: 5, year: 2019 },
  { id: 6, year: 2020 },
  { id: 7, year: 2021 },
  { id: 8, year: 2022 },
]

export const yearsArraySorted = yearsArray.sort((a, b) => b.year - a.year)
