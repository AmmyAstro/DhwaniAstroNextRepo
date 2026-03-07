

import NumerokundliClientWrapper from "./NumerokundliClientWrapper";


export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }

 

  return (
    <NumerokundliClientWrapper
      hash={hash}
      serverMode={true}
    />
  );
}
