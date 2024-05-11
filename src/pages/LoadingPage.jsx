import Spinner from '../components/Ui/Spinner';

function LoadingPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
        <Spinner width={48} height={48} />
    </div>
  );
}

export default LoadingPage;
