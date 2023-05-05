import { useParams } from "react-router-dom";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import DualRingSpinner from "../components/DualRingSpinner";

const Exchanges = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoExchangesQuery(coinId);

  const exchanges = data?.data?.exchanges;

  if (isFetching) return <DualRingSpinner />;
  return (
    <div>
      {exchanges?.map(ex => {
        <p>{JSON.stringify(ex)}</p>;
      })}
    </div>
  );
};

export default Exchanges;
