import Link from 'next/link';
import Head from 'next/head';
import withAnimation from 'shared/HOC/withAnimation';
import ButtonLink from 'shared/components/ButtonLink/ButtonLink';
import { ButtonVariant } from 'shared/components/Button/Button';
import { useApplicationContext } from 'features/application/context';

function IndexPage() {
  const { user, loading } = useApplicationContext();

  return (
    <>
      <Head>
        <title>Employee Pulse</title>
        <meta name="description" content="Homepage - Employee Pulse" />
      </Head>

      <div className="mb-16 pt-28 md:pt-40">
        <h1 className="leading-tighter mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
          How are you&nbsp;
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-100 bg-clip-text text-transparent">
            feeling?
          </span>
        </h1>
        <p className="mb-8 text-xl text-zinc-600">
          There is no better way to find out than Employee Pulse
        </p>
        <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {!loading && !user && (
            <Link href={'/login'} passHref>
              <ButtonLink
                variant={ButtonVariant.PRIMARY}
                className="w-full sm:w-auto"
              >
                Sign In
              </ButtonLink>
            </Link>
          )}

          <Link href={'/survey/create'} passHref>
            <ButtonLink
              variant={ButtonVariant.OUTLINE_PRIMARY}
              className="w-full sm:w-auto"
            >
              Create Survey
            </ButtonLink>
          </Link>
        </div>
      </div>
    </>
  );
}

export default withAnimation(IndexPage);
