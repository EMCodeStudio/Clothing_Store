import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin, IconShield, IconShieldCheck, IconShieldCheckered, IconShieldCheckFilled, IconCreditCardFilled, IconCreditCard, IconCreditCardPay, IconCreditCardRefund, IconCreditCardOff, IconDiscount, IconDiscount2, IconDeviceMobile, IconDeviceMobileMessage, IconTruckDelivery } from '@tabler/icons-react';
import classes from './FeaturesAsymmetrical.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruckDelivery,
    title: 'Envios Gratis',
    description:
      'En Compras superiores de 50.000.',
  },
  {
    icon: IconDeviceMobileMessage,
    title: 'Asesoria 24/7',
    description:
      'Atencion por llamada y chat.',
  },
  {
    icon: IconDiscount2,
    title: 'Ofertas',
    description:
    'Ofertas todos los fines de semana.',
  },
  {
    icon: IconCreditCardFilled,
    title: 'Tarjeta',
    description:
      'Aceptamos Credito y Debito.',
  },
  {
    icon: IconCoin,
    title: 'Efecty',
    description:
      'Puedes pagar en puntos efecty.',
  },
  {
    icon: IconShieldCheckFilled,
    title: 'Seguridad',
    description:
      'Datos Personales y pagos 100% seguros.',
  },
];

export function FeatureServices() {
  
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 2, sm: 6 }} spacing={16}>
        {items}
      </SimpleGrid>
    </Container>
  );
}