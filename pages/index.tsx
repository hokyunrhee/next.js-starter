import HomeTemplate from 'components/templates/HomeTemplate';
import { Header } from 'components/organisms/Header';

export default function HomePage() {
  return <HomeTemplate header={<Header />} />;
}
