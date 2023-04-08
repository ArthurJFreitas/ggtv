import Video from '@/components/Video';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Lostão Tv"
          description="Lostão Tv - O mior site de streaming"
        />
      }
    >
        <h1 className='text-6xl'> Lostão Tv - Twitch 2</h1>
      <Video />
      Chat: 
      <div className='w-[500px] h-[600px] bg-slate-700 text-white'>
        Em construção
      </div>
    </Main>
  );
};

export default Index;
