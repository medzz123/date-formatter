import Head from '@components/Head';
import Input from '@components/Input';
import MaxContainer from '@components/MaxContainer';
import Select from '@components/Select';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import apiReference from './apiReference.json';

const ItemContainer = styled.div`
  width: 100%;
  min-width: 200px;
  margin-right: 32px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const DateText = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const ShadowBlock = styled.div`
  padding: 20px;
  background-color: ${(p) => p.theme.beige};
  border-radius: 15px;
`;

const locales = [
  { value: 'en', label: 'en' },
  { value: 'es', label: 'es' },
  { value: 'ar ly', label: 'ar-ly' },
];

const DayJs = () => {
  const [format, setFormat] = React.useState('DD MMM YY');
  const [inputDate, setInputDate] = React.useState(new Date().toDateString());
  const [locale, setLocale] = React.useState('en');

  const date = dayjs(inputDate).locale(locale).format(format);
  return (
    <div>
      <Head title="Date Formatter | Day Js" />
      <MaxContainer>
        <h1>Day Js</h1>

        <ShadowBlock>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ItemContainer>
              <p>Date</p>
              <Input
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
              />
            </ItemContainer>
            <ItemContainer>
              <p>Format</p>
              <Input
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </ItemContainer>
            <ItemContainer>
              <p>Locale</p>
              <Select
                value={locale}
                data={locales}
                onChange={(e) => setLocale(e.target.value)}
              />
            </ItemContainer>
          </div>

          <DateText>{date}</DateText>
        </ShadowBlock>
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
          {apiReference.map((s, si) => (
            <div key={si}>
              <p>{s.title}</p>
              <div>
                {s.data.map((e, i) => (
                  <div key={i} style={{ marginTop: 20, display: 'flex' }}>
                    <span style={{ minWidth: '170px' }}>{e.input}</span>
                    <span style={{ minWidth: '170px' }}>{e.example}</span>
                    <span style={{ minWidth: '150px' }}>{e.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxContainer>
    </div>
  );
};

export default DayJs;
