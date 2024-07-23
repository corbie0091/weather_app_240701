import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  return <div>Home</div>;
};
