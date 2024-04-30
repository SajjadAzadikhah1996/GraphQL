import dynamic from 'next/dynamic';

const GraphQLView = dynamic(
    () => import('@/components/view/graphql/GraphQLView'),
    { ssr: false }
);

export default function Page() {
    return <GraphQLView/>;
}