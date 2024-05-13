import './App.css';

function App() {

  const Classes = {
    button: 'p-[10px] px-[30px] bg-black text-white rounded-[10px] hover:bg-[#222]'
  }

  return (
    <div className='flex gap-5 justify-center flex-col align-center h-[100vh]'>
      <div className="flex gap-5 justify-center align-center">
        <a className={Classes.button} href="/create">Create URL</a>
        <a className={Classes.button} href="/open">Open URL</a>
      </div>
    </div>
  );
}

export default App;
