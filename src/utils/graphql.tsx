import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<Users>;
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  posts: Array<Posts>;
  token?: Maybe<Scalars['String']>;
};

export type Posts = {
  __typename?: 'Posts';
  id: Scalars['ID'];
  caption: Scalars['String'];
  likes: Scalars['Float'];
  user: Users;
  uniqueId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Users>;
  login?: Maybe<Users>;
  updatePassword?: Maybe<Users>;
  updateEmail?: Maybe<Users>;
  updateUsername?: Maybe<Users>;
  deleteUser?: Maybe<Scalars['Boolean']>;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  password: Scalars['String'];
};


export type MutationUpdateEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateUsernameArgs = {
  username: Scalars['String'];
};

export type DeleteuserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteuserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'username' | 'email' | 'token'>
    & { posts: Array<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'caption' | 'uniqueId'>
    )> }
  )> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'username' | 'email' | 'token'>
    & { posts: Array<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'uniqueId'>
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'username' | 'email' | 'token'>
    & { posts: Array<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'caption' | 'likes' | 'uniqueId'>
    )> }
  )> }
);

export type ChangeemailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ChangeemailMutation = (
  { __typename?: 'Mutation' }
  & { updateEmail?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'token' | 'username' | 'email'>
  )> }
);

export type ChangepasswordMutationVariables = Exact<{
  password: Scalars['String'];
}>;


export type ChangepasswordMutation = (
  { __typename?: 'Mutation' }
  & { updatePassword?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'token' | 'username' | 'email'>
  )> }
);

export type ChangeusernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type ChangeusernameMutation = (
  { __typename?: 'Mutation' }
  & { updateUsername?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'token' | 'username' | 'email'>
  )> }
);


export const DeleteuserDocument = gql`
    mutation DELETEUSER {
  deleteUser
}
    `;
export type DeleteuserMutationFn = Apollo.MutationFunction<DeleteuserMutation, DeleteuserMutationVariables>;

/**
 * __useDeleteuserMutation__
 *
 * To run a mutation, you first call `useDeleteuserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteuserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteuserMutation, { data, loading, error }] = useDeleteuserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteuserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteuserMutation, DeleteuserMutationVariables>) {
        return Apollo.useMutation<DeleteuserMutation, DeleteuserMutationVariables>(DeleteuserDocument, baseOptions);
      }
export type DeleteuserMutationHookResult = ReturnType<typeof useDeleteuserMutation>;
export type DeleteuserMutationResult = Apollo.MutationResult<DeleteuserMutation>;
export type DeleteuserMutationOptions = Apollo.BaseMutationOptions<DeleteuserMutation, DeleteuserMutationVariables>;
export const LoginDocument = gql`
    mutation LOGIN($email: String!, $password: String!) {
  login(password: $password, email: $email) {
    id
    username
    email
    posts {
      id
      caption
      uniqueId
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ProfileDocument = gql`
    query PROFILE {
  profile {
    id
    username
    email
    posts {
      id
      uniqueId
    }
    token
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RegisterDocument = gql`
    mutation REGISTER($email: String!, $username: String!, $password: String!) {
  register(password: $password, email: $email, username: $username) {
    id
    username
    email
    token
    posts {
      id
      caption
      likes
      uniqueId
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ChangeemailDocument = gql`
    mutation CHANGEEMAIL($email: String!) {
  updateEmail(email: $email) {
    id
    token
    username
    email
  }
}
    `;
export type ChangeemailMutationFn = Apollo.MutationFunction<ChangeemailMutation, ChangeemailMutationVariables>;

/**
 * __useChangeemailMutation__
 *
 * To run a mutation, you first call `useChangeemailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeemailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeemailMutation, { data, loading, error }] = useChangeemailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useChangeemailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeemailMutation, ChangeemailMutationVariables>) {
        return Apollo.useMutation<ChangeemailMutation, ChangeemailMutationVariables>(ChangeemailDocument, baseOptions);
      }
export type ChangeemailMutationHookResult = ReturnType<typeof useChangeemailMutation>;
export type ChangeemailMutationResult = Apollo.MutationResult<ChangeemailMutation>;
export type ChangeemailMutationOptions = Apollo.BaseMutationOptions<ChangeemailMutation, ChangeemailMutationVariables>;
export const ChangepasswordDocument = gql`
    mutation CHANGEPASSWORD($password: String!) {
  updatePassword(password: $password) {
    id
    token
    username
    email
  }
}
    `;
export type ChangepasswordMutationFn = Apollo.MutationFunction<ChangepasswordMutation, ChangepasswordMutationVariables>;

/**
 * __useChangepasswordMutation__
 *
 * To run a mutation, you first call `useChangepasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangepasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changepasswordMutation, { data, loading, error }] = useChangepasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangepasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangepasswordMutation, ChangepasswordMutationVariables>) {
        return Apollo.useMutation<ChangepasswordMutation, ChangepasswordMutationVariables>(ChangepasswordDocument, baseOptions);
      }
export type ChangepasswordMutationHookResult = ReturnType<typeof useChangepasswordMutation>;
export type ChangepasswordMutationResult = Apollo.MutationResult<ChangepasswordMutation>;
export type ChangepasswordMutationOptions = Apollo.BaseMutationOptions<ChangepasswordMutation, ChangepasswordMutationVariables>;
export const ChangeusernameDocument = gql`
    mutation CHANGEUSERNAME($username: String!) {
  updateUsername(username: $username) {
    id
    token
    username
    email
  }
}
    `;
export type ChangeusernameMutationFn = Apollo.MutationFunction<ChangeusernameMutation, ChangeusernameMutationVariables>;

/**
 * __useChangeusernameMutation__
 *
 * To run a mutation, you first call `useChangeusernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeusernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeusernameMutation, { data, loading, error }] = useChangeusernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useChangeusernameMutation(baseOptions?: Apollo.MutationHookOptions<ChangeusernameMutation, ChangeusernameMutationVariables>) {
        return Apollo.useMutation<ChangeusernameMutation, ChangeusernameMutationVariables>(ChangeusernameDocument, baseOptions);
      }
export type ChangeusernameMutationHookResult = ReturnType<typeof useChangeusernameMutation>;
export type ChangeusernameMutationResult = Apollo.MutationResult<ChangeusernameMutation>;
export type ChangeusernameMutationOptions = Apollo.BaseMutationOptions<ChangeusernameMutation, ChangeusernameMutationVariables>;