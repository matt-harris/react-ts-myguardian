import React from 'react';
import { Idata } from '../App';
import styled from 'styled-components';

const DefaultCard = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  font-size: 0.875rem;
  line-height: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #ccc1b7;

  @media (min-width: 40rem) {
    flex-direction: column;
    border-bottom: 0;
    padding-bottom: 0;
  }

  .content {
    flex: 1 0 0%;
    order: 2;
  }

  .image-container {
    width: 30%;
    flex-shrink: 0;
    padding-top: 0.25rem;
    padding-right: 1.25rem;

    @media (min-width: 40rem) {
      margin-bottom: 1rem;
      width: 100%;
      min-height: 1px;
      padding-top: 0;
      padding-right: 0;
    }
  }

  .heading {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Noto Serif', serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.375rem;

    a {
      padding: 0.125rem 0;
      color: inherit;
      text-decoration: none;
      border: 0;

      &:visited {
        color: #65625c;
      }
    }
  }

  .standfirst {
    margin-top: 0.625rem;
    margin-bottom: 0;
    color: #65625c;
    font-size: .875rem;
    line-height: 1.25rem;

    a {
      padding: 0.125rem 0;
      color: inherit;
      text-decoration: none;
      border: 0;

      &:visited {
        color: #65625c;
      }
    }
  }

  .image {
    display: block;
    width: 100%;
    margin: 0;
  }
}
`;

const Card = (props: Idata) => {
  const {
    fields: { thumbnail, trailText },
    webTitle,
    webUrl,
  } = props;

  const stripedText = trailText.replace(/<[^>]+>/g, '');

  return (
    <DefaultCard>
      <div className='content'>
        <h2 className='heading'>
          <a href={webUrl}>{webTitle}</a>
        </h2>
        <p className='standfirst'>
          <a href={webUrl}>{stripedText}</a>
        </p>
      </div>

      <div className='image-container'>
        <a href={webUrl}>
          <img className='image' src={thumbnail} alt={webTitle} />
        </a>
      </div>
    </DefaultCard>
  );
};

export default Card;
