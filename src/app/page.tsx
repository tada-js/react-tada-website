import CodePreview from '@/app/components/CodePreview';
import Counter from '@/app/components/Counter';
import PartyPopper from '@/app/components/PartyPopper';
import Details from '@/app/components/Details';

export default function Home() {
  return (
    <>
      <header>
        <Details />
      </header>
      <PartyPopper />
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}
