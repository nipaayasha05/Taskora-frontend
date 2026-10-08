type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function CancelPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  // console.log(session_id);

  return <div>Payment Successful</div>;
}
