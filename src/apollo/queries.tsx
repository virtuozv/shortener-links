import { gql } from "@apollo/client";

export const GET_SHORT_URLS = gql`
  query postUrls {
    short_urls {
      data {
        id
        url
        short_url
        clicks
        created_at
        updated_at
      }
      # paginatorInfo {
      #   count
      #   currentPage
      #   firstItem
      #   hasMorePages
      #   lastItem
      #   lastPage
      #   perPage
      #   total
      # }
    }
  }
`;
