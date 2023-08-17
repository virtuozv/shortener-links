import { useQuery } from "@apollo/client";
import { GET_SHORT_URLS } from "../../apollo/queries";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { listReducer } from "../../redux/listLinksSlice";
import { IList } from "../../model/lists";

export function BoxList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_SHORT_URLS);

  useEffect(() => {
    if (data) {
      dispatch(listReducer(data.short_urls.data as [IList]));
    }
  }, [data, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // return data.short_urls.data.map(
  //   ({ id, url }: { id: string; url: string }) => <div key={id}>{url}</div>
  // );

  return null;
}
