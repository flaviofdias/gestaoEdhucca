import { format } from 'date-fns';

function Holidays(start_date, end_date) {
  const holidaysBR = [
    '2020-01-01',
    '2020-02-24',
    '2020-02-25',
    '2020-04-10',
    '2020-04-21',
    '2020-05-01',
    '2020-06-11',
    '2020-09-07',
    '2020-10-12',
    '2020-11-02',
    '2020-11-15',
    '2020-12-25',
    '2021-01-01',
    '2021-02-15',
    '2021-02-16',
    '2021-04-02',
    '2021-04-21',
    '2021-05-01',
    '2021-06-03',
    '2021-09-07',
    '2021-10-12',
    '2021-11-02',
    '2021-11-15',
    '2021-12-25',
    '2022-01-01',
    '2022-02-28',
    '2022-03-01',
    '2022-04-15',
    '2022-04-21',
    '2022-05-01',
    '2022-06-16',
    '2022-09-07',
    '2022-10-12',
    '2022-11-02',
    '2022-11-15',
    '2022-12-25',
    '2023-01-01',
    '2023-02-20',
    '2023-02-21',
    '2023-04-07',
    '2023-04-21',
    '2023-05-01',
    '2023-06-08',
    '2023-09-07',
    '2023-10-12',
    '2023-11-02',
    '2023-11-15',
    '2023-12-25',
    '2024-01-01',
    '2024-02-12',
    '2024-02-13',
    '2024-03-29',
    '2024-04-21',
    '2024-05-01',
    '2024-05-30',
    '2024-09-07',
    '2024-10-12',
    '2024-11-02',
    '2024-11-15',
    '2024-12-25',
    '2025-01-01',
    '2025-03-03',
    '2025-03-04',
    '2025-04-18',
    '2025-04-21',
    '2025-05-01',
    '2025-06-19',
    '2025-09-07',
    '2025-10-12',
    '2025-11-02',
    '2025-11-15',
    '2025-12-25',
  ];
  const Data = holidaysBR;
  const formatStart = format(start_date, "yyyy'-'MM'-'dd");
  const formatEnd = format(end_date, "yyyy'-'MM'-'dd");

  // Build Data => copy of Holiday array and sort.
  Data.push(formatStart);
  Data.push(formatEnd);
  Data.sort();

  // Build newData => array with holdays between start & end.
  const startIndex = Data.findIndex((s) => s === formatStart);
  const endIndex = Data.findIndex((e) => e === formatEnd);
  const newData = Data.slice(startIndex, endIndex);
  newData.splice(0, 1); // delete start_date.
  newData.splice(-1, 1); // delete end_date.
  // console.log(newData);

  // Build array with bracket (holiday, 'H').
  const newDataLength = newData.length;
  const hData = [];
  let bracket = [];
  let i;
  for (i = 0; i < newDataLength; i += 1) {
    bracket = [newData[i], 'H'];
    hData.push(bracket);
  }
  // hData => array of bracket (holiday, 'H').
  return hData;
}

export default Holidays;

/*
let Original = [
  01/01/2020,
  24/02/2020,
  25/02/2020,
  10/04/2020,
  21/04/2020,
  01/05/2020,
  11/06/2020,
  07/09/2020,
  12/10/2020,
  02/11/2020,
  15/11/2020,
  25/12/2020,
  01/01/2021,
  15/02/2021,
  16/02/2021,
  02/04/2021,
  21/04/2021,
  01/05/2021,
  03/06/2021,
  07/09/2021,
  12/10/2021,
  02/11/2021,
  15/11/2021,
  25/12/2021,
  01/01/2022,
  28/02/2022,
  01/03/2022,
  15/04/2022,
  21/04/2022,
  01/05/2022,
  16/06/2022,
  07/09/2022,
  12/10/2022,
  02/11/2022,
  15/11/2022,
  25/12/2022,
  01/01/2023,
  20/02/2023,
  21/02/2023,
  07/04/2023,
  21/04/2023,
  01/05/2023,
  08/06/2023,
  07/09/2023,
  12/10/2023,
  02/11/2023,
  15/11/2023,
  25/12/2023,
  01/01/2024,
  12/02/2024,
  13/02/2024,
  29/03/2024,
  21/04/2024,
  01/05/2024,
  30/05/2024,
  07/09/2024,
  12/10/2024,
  02/11/2024,
  15/11/2024,
  25/12/2024,
]

let DataISO = [
  2020-01-01,
  2020-02-24,
  2020-02-25,
  2020-04-10,
  2020-04-21,
  2020-05-01,
  2020-06-11,
  2020-09-07,
  2020-10-12,
  2020-11-02,
  2020-11-15,
  2020-12-25,
  2021-01-01,
  2021-02-15,
  2021-02-16,
  2021-04-02,
  2021-04-21,
  2021-05-01,
  2021-06-03,
  2021-09-07,
  2021-10-12,
  2021-11-02,
  2021-11-15,
  2021-12-25,
  2022-01-01,
  2022-02-28,
  2022-03-01,
  2022-04-15,
  2022-04-21,
  2022-05-01,
  2022-06-16,
  2022-09-07,
  2022-10-12,
  2022-11-02,
  2022-11-15,
  2022-12-25,
  2023-01-01,
  2023-02-20,
  2023-02-21,
  2023-04-07,
  2023-04-21,
  2023-05-01,
  2023-06-08,
  2023-09-07,
  2023-10-12,
  2023-11-02,
  2023-11-15,
  2023-12-25,
  2024-01-01,
  2024-02-12,
  2024-02-13,
  2024-03-29,
  2024-04-21,
  2024-05-01,
  2024-05-30,
  2024-09-07,
  2024-10-12,
  2024-11-02,
  2024-11-15,
  2024-12-25,
]
*/
