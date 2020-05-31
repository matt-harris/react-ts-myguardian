import React, { useState, useEffect } from 'react';
import { Idata } from './../App';
import { Row, Col } from '../styles/Grid';
import Card from './Card';
import styled from 'styled-components';

const ContentSection = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Serif', serif;
  font-size: 2rem;
  font-weight: 700;

  &:after {
    flex: 1;
    content: '';
    border-top: #e3dccf 0.25rem solid;
    margin-left: 1.5rem;
  }
`;

const key = process.env.REACT_APP_API_KEY;

const Section = (props: { title: string; id: string; numItems?: number }) => {
  const [data, setData] = useState<Idata | null>(null);
  const { title, id, numItems = 4 } = props;

  async function fetchData(id: string, numItems?: number): Promise<void> {
    const url = `http://content.guardianapis.com/${id}?page-size=${numItems}&show-fields=trailText%2Cthumbnail&api-key=${key}`;

    const res = await fetch(url);
    const {
      response: { results },
    } = await res.json();

    setData(results);
  }

  useEffect(() => {
    fetchData(id, numItems);
  }, [id, numItems]);

  return (
    <ContentSection>
      <Title>{title}</Title>
      <Row>
        {data?.map((item, index) => (
          <Col size={1} key={index}>
            <Card {...item} />
          </Col>
        ))}
      </Row>
    </ContentSection>
  );
};

export default Section;
