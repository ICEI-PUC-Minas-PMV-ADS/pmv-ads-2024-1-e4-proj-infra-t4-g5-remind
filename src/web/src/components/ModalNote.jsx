import toast from 'react-hot-toast';
import { completeNote } from '../services/noteServices';
import { messageDateDiffInMinutes } from '../utils';

export default function ModalNote({ open, setOpen, note }) {
  if (note) {
    note.remainingMessage = messageDateDiffInMinutes(note?.datafinal);
  }

  async function handleCompleteTask() {
    try {
      await completeNote(note._id);

      toast.success('Tarefa criada com sucesso!');
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error('Algo deu errado, tente novamente.');
    }
  }

  return (
    <div
      className={`absolute top-0 left-0 z-10 invisible opacity-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 ${open && '!visible !opacity-100'}`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`invisible opacity-0 flex flex-col w-1/2 max-w-[500px] gap-6 p-4 rounded-md bg-white h-fit ${open && '!visible !opacity-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">
              {note?.titulo || 'Título'}
            </h1>
            <button
              className="bg-textSecondary bg-opacity-35 font-semibold text-sm rounded-[50%] w-6 h-6 hover:scale-105"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <p className="flex items-center justify-center text-xl font-bold bg-primary rounded-[50%] w-8 h-8 text-white">
                {note?.userInfo.nome[0] || '@'}
              </p>
              <h1 className="text-lg font-medium text-subtleBlack">
                {note?.userInfo.nome || 'Remetente'}
              </h1>
            </div>

            <p className="text-sm text-textSecondary">
              {new Date(note?.datafinal).toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }) || 'dd.mm.yyyy'}
            </p>
          </div>
        </div>

        <p className="p-1 rounded-md bg-bgSecondary w-fit">
          {note?.descricao || 'Descrição'}
        </p>

        {!note?.dataconclusao ? (
          <>
            <p className="text-sm text-textSecondary">
              {note?.remainingMessage}
            </p>

            <div className="flex justify-center">
              <button
                className="h-12 font-semibold bg-white border shadow-sm w-36 text-btnBlue border-btnBlue hover:scale-105 hover:rounded-md lg:w-50"
                onClick={() => handleCompleteTask()}
              >
                Concluir tarefa
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
