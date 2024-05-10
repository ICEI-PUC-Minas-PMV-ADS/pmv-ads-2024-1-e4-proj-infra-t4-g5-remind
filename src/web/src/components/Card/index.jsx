import { messageDateDiffInMinutes } from '../../utils';
import CardTag from './CardTag';

export default function Card({ note, setModalOpen, setSelectedNote }) {
  if (note) {
    note.remainingMessage = messageDateDiffInMinutes(note?.datafinal);
  }

  return (
    <div
      className="grid grid-flow-row gap-2 p-4 bg-white rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]"
      key={note._id}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          {/* Somente mostrar o remaining caso a data de conclusão seja nula */}
          {!note?.dataconclusao ? (
            <CardTag text={note?.remainingMessage} />
          ) : null}
          <CardTag text={note?.dataconclusao ? 'Concluída' : 'Em progresso'} />
        </div>

        {/* //!TODO Arrumar alguma função para os tres pontos
        <p className="text-2xl font-bold text-subtleBlack">. . .</p> */}
      </div>

      <div className="flex items-center gap-2">
        <p className="flex items-center justify-center text-md font-bold bg-primary rounded-[50%] w-6 h-6 text-white">
          {/* //!TODO Arrumar a foto do usuário */}
          {note.userInfo.nome[0] || '@'}
        </p>

        <h1 className="text-sm text-subtleBlack">
          {note.userInfo.nome || 'Nome'}
        </h1>
      </div>
      <h1
        className="text-lg font-semibold sm:text-2xl text-subtleBlack"
        id="card-titulo"
      >
        {note.titulo || 'Título'}
      </h1>

      <span className="text-sm h-[60px] text-ellipsis line-clamp-3 text-textSecondary">
        {note.descricao}
      </span>

      <p className="text-sm text-textSecondary">
        {new Date(note.datafinal).toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }) || 'dd.mm.yyyy'}
      </p>
      <button
        id="card-ver-mais"
        className="text-sm w-fit text-textLink hover:underline underline-offset-2"
        onClick={() => {
          setSelectedNote(note);
          setModalOpen((prev) => !prev);
        }}
      >
        Ver Mais
      </button>
    </div>
  );
}
