import Head from 'next/head';
import router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import NavBar from '../../components/navBar';
import LinkListTable from '../../components/url/LinkListTable';
import { storeInteractor } from '../../lib/localStorage/storeInteractor';

export default function ContainerContents() {
  // loading state
  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const router = useRouter();

  const [linkListProps, setLinkListProps] = useState<{
    containerId: number;
    token: string;
  }>({
    containerId: 0,
    token: '',
  });

  console.log('in container id');

  useEffect(() => {
    alert(router.query.containerId);

    if (storeInteractor.checkToken) {
      console.log('has token: ' + storeInteractor.checkToken);

      // console.log(router.query.containerId);
      // setLinkListProps({ containerId: 22, token: storeInteractor.getToken() });

      setTimeout(() => {
        setShowSpinner(true);
      }, 1000);
    } else {
      setShowSpinner(true);
      router.push('/login');
    }
  }, []);

  if (showSpinner) return <LoadingSpinner />;

  return (
    <div>
      <Head>
        <title>FordaStore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <NavBar />

      <LinkListTable props={linkListProps} />
    </div>
  );
}