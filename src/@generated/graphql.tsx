import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BlogList = {
  __typename?: 'BlogList';
  id: Scalars['ID'];
  tags: Array<Scalars['String']>;
  thumbnailImagePath: Scalars['String'];
  title: Scalars['String'];
};

export type BlogListConnection = {
  __typename?: 'BlogListConnection';
  nodes: Array<BlogList>;
  pageInfo: PageInfo;
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  login: User;
  signUp: User;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationSignUpArgs = {
  input: SignUp;
};

export type PageCondition = {
  limit: Scalars['Int'];
  pageNo: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  pageNo: Scalars['Int'];
  /** 検索結果の全件数 */
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  blogList: BlogListConnection;
  getMyUser: User;
  recommendBlogList: RecommendBlogListConnection;
};


export type QueryBlogListArgs = {
  input: PageCondition;
};

export type RecommendBlogListConnection = {
  __typename?: 'RecommendBlogListConnection';
  nodes: Array<BlogList>;
};

export type SignUp = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  postalCode: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
};

export type BlogListQueryVariables = Exact<{
  pageNo: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type BlogListQuery = { __typename?: 'Query', blogList: { __typename?: 'BlogListConnection', nodes: Array<{ __typename?: 'BlogList', id: string, title: string, tags: Array<string>, thumbnailImagePath: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } } };

export type RecommendBlogListQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendBlogListQuery = { __typename?: 'Query', recommendBlogList: { __typename?: 'RecommendBlogListConnection', nodes: Array<{ __typename?: 'BlogList', id: string, title: string, tags: Array<string>, thumbnailImagePath: string }> } };

export type SignUpMutationVariables = Exact<{
  input: SignUp;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', name: string } };


export const BlogListDocument = gql`
    query BlogList($pageNo: Int!, $limit: Int!) {
  blogList(input: {pageNo: $pageNo, limit: $limit}) {
    nodes {
      id
      title
      tags
      thumbnailImagePath
    }
    pageInfo {
      totalCount
    }
  }
}
    `;

/**
 * __useBlogListQuery__
 *
 * To run a query within a React component, call `useBlogListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogListQuery({
 *   variables: {
 *      pageNo: // value for 'pageNo'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBlogListQuery(baseOptions: Apollo.QueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, options);
      }
export function useBlogListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, options);
        }
export type BlogListQueryHookResult = ReturnType<typeof useBlogListQuery>;
export type BlogListLazyQueryHookResult = ReturnType<typeof useBlogListLazyQuery>;
export type BlogListQueryResult = Apollo.QueryResult<BlogListQuery, BlogListQueryVariables>;
export const RecommendBlogListDocument = gql`
    query RecommendBlogList {
  recommendBlogList {
    nodes {
      id
      title
      tags
      thumbnailImagePath
    }
  }
}
    `;

/**
 * __useRecommendBlogListQuery__
 *
 * To run a query within a React component, call `useRecommendBlogListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendBlogListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendBlogListQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommendBlogListQuery(baseOptions?: Apollo.QueryHookOptions<RecommendBlogListQuery, RecommendBlogListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendBlogListQuery, RecommendBlogListQueryVariables>(RecommendBlogListDocument, options);
      }
export function useRecommendBlogListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendBlogListQuery, RecommendBlogListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendBlogListQuery, RecommendBlogListQueryVariables>(RecommendBlogListDocument, options);
        }
export type RecommendBlogListQueryHookResult = ReturnType<typeof useRecommendBlogListQuery>;
export type RecommendBlogListLazyQueryHookResult = ReturnType<typeof useRecommendBlogListLazyQuery>;
export type RecommendBlogListQueryResult = Apollo.QueryResult<RecommendBlogListQuery, RecommendBlogListQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUp!) {
  signUp(input: $input) {
    name
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;