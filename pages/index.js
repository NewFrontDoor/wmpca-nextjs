import styled from '@emotion/styled';

import Layout from '../components/layout';
import Header from '../components/header/header';
import Carousel from '@newfrontdoor/carousel';
import Contact from '../templates/contact';
import Panels from '../components/panels';
import Portfolio from '../components/portfolio';
import Welcome from '../components/welcome';

const Slide = styled.img`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Index = () => (
    <Layout>
            <Header heading={['WOMENS MINISTRY IN THE', 'PRESBYTERIAN CHURCH OF AUSTRALIA']} />
    </Layout>
)

export default Index;