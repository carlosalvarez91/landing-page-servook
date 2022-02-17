/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Free Plan',
    subtitle: 'Connect with 5 customers max per month',
    amount: {
      monthly: 0,
      annual: 0 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Start Free Plan',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Set your profile and be visible to customers',
      },
      {
        id: 2,
        isAvailable: false,
        title: `Unlimited customers`,
      },
      {
        id: 3,
        isAvailable: false,
        title: `Social media presence`,
      }
    ],
  },
  {
    id: 2,
    title: 'Premium Plan',
    subtitle: 'Connect with unlimited customers',
    amount: {
      monthly: 5.00,
      annual: 5.00 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Start Premium Plan',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Set your profile and be visible to customers',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Unlimited customers`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Social media presence`,
      }
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Join as a Professional"
          description="Meet our pricing plan"
        />
 
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
