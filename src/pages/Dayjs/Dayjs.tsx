import MaxContainer from '@components/MaxContainer';
import dayjs from 'dayjs';
import React from 'react';

const apiReference = [
  { input: 'YY', example: '18', description: 'Two-digit year' },
  { input: 'YYYY', example: '2018', description: 'Four-digit year' },
  { input: 'M', example: '1-12', description: 'Month, beginning at 1' },
  { input: 'MM', example: '01-12', description: 'Month, 2-digits' },
  {
    input: 'MMM',
    example: 'Jan-Dec',
    description: 'The abbreviated month name',
  },
  {
    input: 'MMMM',
    example: 'January-December',
    description: 'The full month name',
  },
  { input: 'D', example: '1-31', description: 'Day of month' },
  { input: 'DD', example: '01-31', description: 'Day of month, 2-digits' },
  { input: 'H', example: '0-23', description: 'Hours' },
  { input: 'HH', example: '00-23', description: 'Hours, 2-digits' },
  { input: 'h', example: '1-12', description: 'Hours, 12-hour clock' },
  {
    input: 'hh',
    example: '01-12',
    description: 'Hours, 12-hour clock, 2-digits',
  },
  { input: 'm', example: '0-59', description: 'Minutes' },
  { input: 'mm', example: '00-59', description: 'Minutes, 2-digits' },
  { input: 's', example: '0-59', description: 'Seconds' },
  { input: 'ss', example: '00-59', description: 'Seconds, 2-digits' },
  {
    input: 'S',
    example: '0-9',
    description: 'Hundreds of milliseconds, 1-digit',
  },
  {
    input: 'SS',
    example: '00-99',
    description: 'Tens of milliseconds, 2-digits',
  },
  { input: 'SSS', example: '000-999', description: 'Milliseconds, 3-digits' },
  { input: 'Z', example: '-05:99', description: 'Offset from UTC' },
  {
    input: 'ZZZ',
    example: '-0500',
    description: 'Compact offset from UTC, 2-digits',
  },
  {
    input: 'A',
    example: 'AM PM',
    description: 'Post or ante meridiem, upper-case',
  },
  {
    input: 'a',
    example: 'am pm',
    description: 'Post or ante meridiem, lower-case',
  },
  { input: 'Do', example: '1st...', description: 'Day of Month with ordinal' },
];

const DayJs = () => {
  const [format, setFormat] = React.useState('DD MMM YY');
  const [inputDate, setInputDate] = React.useState(new Date().toDateString());

  const date = dayjs(inputDate).locale('en').format(format);
  return (
    <div>
      <MaxContainer>
        <h1>Day Js Page</h1>

        <p>Date</p>
        <input
          type="text"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />

        <p>Format</p>
        <input
          type="text"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        />

        <p>{date}</p>
        <div
          style={{
            maxHeight: 400,
            overflow: 'scroll',
            border: '3px solid black',
            padding: 10,
            width: 600,
          }}
        >
          <div style={{ display: 'flex' }}>
            <span style={{ minWidth: '80px' }}>Input</span>
            <span style={{ minWidth: '170px' }}>Example</span>
            <span style={{ minWidth: '150px' }}>Description</span>
          </div>
          {apiReference.map((el, i) => (
            <div key={i} style={{ marginTop: 20, display: 'flex' }}>
              <span
                style={{
                  minWidth: '80px',
                }}
              >
                {el.input}
              </span>
              <span style={{ minWidth: '170px' }}>{el.example}</span>
              <span style={{ minWidth: '150px' }}>{el.description}</span>
            </div>
          ))}
        </div>
      </MaxContainer>
    </div>
  );
};

export default DayJs;
