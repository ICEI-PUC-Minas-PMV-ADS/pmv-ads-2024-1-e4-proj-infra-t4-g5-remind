import Select, { components } from 'react-select';
import { createNote } from '../services/noteServices';
import { useEffect, useRef, useState } from 'react';
import Input from './Input';
import { getAllUsers } from '../services/userServices';
import toast from 'react-hot-toast';
//!TODO Adicionar foto da pessoa linha dentro do Option e mudar dentro do resFormatted
//
const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className="flex gap-2">
        <p className="flex items-center justify-center text-md font-bold bg-primary rounded-[50%] w-6 h-6 text-white">
          {props.data.photo[0] || '@'}
        </p>

        <p>{props.label}</p>
      </div>
    </components.Option>
  );
};

const Control = (props) => (
  <div>
    <p>Destinatário</p>
    <components.Control {...props} />
  </div>
);

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex gap-2">
      <p className="flex items-center justify-center text-md font-bold bg-primary rounded-[50%] w-6 h-6 text-white">
        {props.data.photo[0] || '@'}
      </p>
      {children}
    </div>
  </components.SingleValue>
);

const Group = (props) => (
  <div className="border-lightGray border-b-[1px]">
    <components.Group {...props} />
  </div>
);

export default function CreateNote({ open, setOpen }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});
  const $createNote = useRef(null);

  useEffect(() => {
    const getUsers = async () => {
      const res = await getAllUsers();

      let resFormatted = res.map((user) => ({
        value: user._id,
        label: user.nome,
        photo: user.photo || user.nome,
        cargo: user.cargo,
      }));

      const groupedOptions = Object.values(
        resFormatted.reduce((acc, user) => {
          if (!acc[user.cargo]) {
            acc[user.cargo] = {
              label: user.cargo,
              options: [],
            };
          }
          acc[user.cargo].options.push(user);
          return acc;
        }, {}),
      );

      setUsers(groupedOptions);
    };

    getUsers();
  }, [open]);

  async function handleSubmit(e) {
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    const errors = {};

    if (
      !values.destinatario &&
      !values.titulo &&
      !values.datafinal &&
      !values.descricao
    ) {
      errors.general = 'Preencha todos os campos.';
    } else if (values.titulo.length < 3) {
      errors.titulo = 'Título deve ter no mínimo 3 caracteres.';
    } else if (values.destinatario.length <= 0) {
      errors.destinatario = 'Destiatário é obrigatório';
    } else if (new Date(values.datafinal) <= new Date().getTime()) {
      errors.datafinal = 'Data final deve ser maior que a data atual';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      await createNote(values);

      toast.success('Tarefa criada com sucesso!');
      setOpen(false);
      setError(false);
      $createNote.current.reset();
      return;
    } catch (err) {
      errors.general = 'Algo deu errado, tente novamente.';
      setError(errors);

      return;
    }
  }

  return (
    <div
      className={`absolute top-0 left-0 z-10 invisible opacity-0 flex items-center justify-center w-[1px] h-screen bg-black bg-opacity-50 ${open && '!w-screen !visible !opacity-100'}`}
      onClick={() => setOpen(false)}
    >
      <form
        className={`invisible opacity-0 flex flex-col w-fit max-w-[500px] gap-6 p-4 rounded-md bg-white h-fit ${open && '!visible !opacity-100'} ${error.general && 'border !border-red-500'}`}
        onClick={(e) => e.stopPropagation()}
        id="create-form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        ref={$createNote}
      >
        <div className="flex flex-col gap-6 w-fit">
          <div className="relative flex items-center gap-6">
            <h1
              id="error-titulo-task-create"
              className={`${error.titulo && '!flex absolute -bottom-6'} hidden text-md text-red-500`}
            >
              {error.titulo}
            </h1>

            <Input
              name="titulo"
              id="titulo"
              placeholder="Título da tarefa"
              className="text-2xl font-bold text-primary md:min-w-96"
            />
            <button
              type="button"
              id="close-create-task"
              className="bg-textSecondary bg-opacity-35 font-semibold text-sm rounded-[50%] w-6 h-6 hover:scale-105"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>

          <div className="flex flex-col">
            <h1
              id="error-destinatario-task-create"
              className="text-red-500 text-md"
            >
              {error.destinatario}
            </h1>

            <Select
              id="select-destinatario-create-task"
              name="destinatario"
              components={{ Group, Option, Control, SingleValue }}
              options={users}
              placeholder="Selecione um usuário..."
              closeMenuOnSelect
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: '#4b0195',
                },
              })}
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderRadius: `${state.isFocused || state.hasValue ? '9px' : '0px'}`,
                  padding: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  '::selection': {
                    backgroundColor: `#F2F4FF`,
                    borderRadius: `${state.isFocused ? '9px' : '0px'}`,
                  },
                }),
                option: (base) => ({
                  ...base,
                  ':hover': {
                    backgroundColor: `#F2F4FF`,
                  },
                  ':active': {
                    backgroundColor: `#F2F4FF`,
                  },
                }),
              }}
            />
          </div>

          <div className="flex flex-col">
            <h1
              id="error-datafinal-task-create"
              className="text-red-500 text-md"
            >
              {error.datafinal}
            </h1>
            <label htmlFor="datafinal">Data final</label>
            <Input
              name="datafinal"
              type="datetime-local"
              id="create-task-datafinal"
              className="w-full p-2 rounded-m"
            />
          </div>

          <textarea
            className=" p-1 border-[1px] border-lightGray border-solid focus:rounded-md w bg-bgSecondary w-full"
            placeholder="Descrição"
            type="textarea"
            name="descricao"
            id="create-task-descricao"
          ></textarea>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 id="error-general-task-create" className="text-red-500 text-md">
            {error.general}
          </h1>
          <button
            id="create-task-criar-tarefa"
            form="create-form"
            className="h-12 font-semibold bg-white border shadow-sm w-36 text-btnBlue border-btnBlue hover:scale-105 hover:rounded-md lg:w-50"
          >
            Criar tarefa
          </button>
        </div>
      </form>
    </div>
  );
}
