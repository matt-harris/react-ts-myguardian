import styled from 'styled-components';

const Container = styled.div`
  max-width: 80rem;
  margin: 1.5rem auto;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 40rem) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: -1rem;
  margin-left: -1rem;

  @media (min-width: 40rem) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 60rem) {
    flex-wrap: nowrap;
  }
`;

const Col = styled.div`
  display: flex;
  flex: ${(props: { size: number }) => props.size};
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 40rem) {
    flex-basis: 50%;
    padding-bottom: 2rem;
  }

  @media (min-width: 60rem) {
    flex-basis: 25%;
    padding-bottom: 0;
  }
`;

export { Container, Row, Col };
