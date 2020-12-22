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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<Users>;
  getPosts?: Maybe<Array<Maybe<Posts>>>;
  getAllPosts?: Maybe<Array<Maybe<Posts>>>;
};

export type Users = {
  __typename?: 'Users';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  token?: Maybe<Scalars['String']>;
};

export type Posts = {
  __typename?: 'Posts';
  id?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Float']>;
  user?: Maybe<Users>;
  uniqueId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Users>;
  login?: Maybe<Users>;
  updatePassword?: Maybe<Users>;
  updateEmail?: Maybe<Users>;
  updateUsername?: Maybe<Users>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  addPost?: Maybe<Posts>;
};


export type MutationRegisterArgs = {
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationUpdatePasswordArgs = {
  password?: Maybe<Scalars['String']>;
};


export type MutationUpdateEmailArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationUpdateUsernameArgs = {
  username?: Maybe<Scalars['String']>;
};


export type MutationAddPostArgs = {
  pic?: Maybe<Scalars['Upload']>;
  caption?: Maybe<Scalars['String']>;
};


export type Subscription = {
  __typename?: 'Subscription';
  posts?: Maybe<Posts>;
};

export type AddpostMutationVariables = Exact<{
  pic: Scalars['Upload'];
  caption: Scalars['String'];
}>;


export type AddpostMutation = (
  { __typename?: 'Mutation' }
  & { addPost?: Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'caption' | 'uniqueId' | 'likes'>
  )> }
);

export type GetallpostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallpostsQuery = (
  { __typename?: 'Query' }
  & { getAllPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'caption' | 'uniqueId' | 'likes'>
    & { user?: Maybe<(
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'email' | 'username'>
    )> }
  )>>> }
);

export type GetpostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetpostsQuery = (
  { __typename?: 'Query' }
  & { getPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'caption' | 'id' | 'uniqueId' | 'likes'>
  )>>> }
);

export type PostsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PostsSubscription = (
  { __typename?: 'Subscription' }
  & { posts?: Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'id' | 'caption' | 'likes' | 'uniqueId'>
    & { user?: Maybe<(
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username'>
    )> }
  )> }
);

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
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'caption' | 'uniqueId'>
    )>>> }
  )> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'username' | 'email' | 'token'>
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'uniqueId'>
    )>>> }
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
    & { posts?: Maybe<Array<Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'id' | 'caption' | 'likes' | 'uniqueId'>
    )>>> }
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


export const AddpostDocument = gql`
    mutation ADDPOST($pic: Upload!, $caption: String!) {
  addPost(pic: $pic, caption: $caption) {
    id
    caption
    uniqueId
    likes
  }
}
    `;
export type AddpostMutationFn = Apollo.MutationFunction<AddpostMutation, AddpostMutationVariables>;

/**
 * __useAddpostMutation__
 *
 * To run a mutation, you first call `useAddpostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddpostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addpostMutation, { data, loading, error }] = useAddpostMutation({
 *   variables: {
 *      pic: // value for 'pic'
 *      caption: // value for 'caption'
 *   },
 * });
 */
export function useAddpostMutation(baseOptions?: Apollo.MutationHookOptions<AddpostMutation, AddpostMutationVariables>) {
        return Apollo.useMutation<AddpostMutation, AddpostMutationVariables>(AddpostDocument, baseOptions);
      }
export type AddpostMutationHookResult = ReturnType<typeof useAddpostMutation>;
export type AddpostMutationResult = Apollo.MutationResult<AddpostMutation>;
export type AddpostMutationOptions = Apollo.BaseMutationOptions<AddpostMutation, AddpostMutationVariables>;
export const GetallpostsDocument = gql`
    query GETALLPOSTS {
  getAllPosts {
    id
    caption
    uniqueId
    likes
    user {
      id
      email
      username
    }
  }
}
    `;

/**
 * __useGetallpostsQuery__
 *
 * To run a query within a React component, call `useGetallpostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetallpostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetallpostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetallpostsQuery(baseOptions?: Apollo.QueryHookOptions<GetallpostsQuery, GetallpostsQueryVariables>) {
        return Apollo.useQuery<GetallpostsQuery, GetallpostsQueryVariables>(GetallpostsDocument, baseOptions);
      }
export function useGetallpostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetallpostsQuery, GetallpostsQueryVariables>) {
          return Apollo.useLazyQuery<GetallpostsQuery, GetallpostsQueryVariables>(GetallpostsDocument, baseOptions);
        }
export type GetallpostsQueryHookResult = ReturnType<typeof useGetallpostsQuery>;
export type GetallpostsLazyQueryHookResult = ReturnType<typeof useGetallpostsLazyQuery>;
export type GetallpostsQueryResult = Apollo.QueryResult<GetallpostsQuery, GetallpostsQueryVariables>;
export const GetpostsDocument = gql`
    query GETPOSTS {
  getPosts {
    caption
    id
    uniqueId
    likes
  }
}
    `;

/**
 * __useGetpostsQuery__
 *
 * To run a query within a React component, call `useGetpostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetpostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetpostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetpostsQuery(baseOptions?: Apollo.QueryHookOptions<GetpostsQuery, GetpostsQueryVariables>) {
        return Apollo.useQuery<GetpostsQuery, GetpostsQueryVariables>(GetpostsDocument, baseOptions);
      }
export function useGetpostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetpostsQuery, GetpostsQueryVariables>) {
          return Apollo.useLazyQuery<GetpostsQuery, GetpostsQueryVariables>(GetpostsDocument, baseOptions);
        }
export type GetpostsQueryHookResult = ReturnType<typeof useGetpostsQuery>;
export type GetpostsLazyQueryHookResult = ReturnType<typeof useGetpostsLazyQuery>;
export type GetpostsQueryResult = Apollo.QueryResult<GetpostsQuery, GetpostsQueryVariables>;
export const PostsDocument = gql`
    subscription POSTS {
  posts {
    id
    caption
    likes
    uniqueId
    user {
      id
      username
    }
  }
}
    `;

/**
 * __usePostsSubscription__
 *
 * To run a query within a React component, call `usePostsSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePostsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<PostsSubscription, PostsSubscriptionVariables>) {
        return Apollo.useSubscription<PostsSubscription, PostsSubscriptionVariables>(PostsDocument, baseOptions);
      }
export type PostsSubscriptionHookResult = ReturnType<typeof usePostsSubscription>;
export type PostsSubscriptionResult = Apollo.SubscriptionResult<PostsSubscription>;
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