'use strict';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations';

const UserStories = () => {

  useGSAP(() => {

    animateWithGsap('#userStories_title', { y:0, opacity:1, delay: 0.3})
    animateWithGsap('#userStories_subtitle', { y:0, opacity:1, delay: 0.8})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1', delay: 1 },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    );
    animateWithGsap(
      '.g_text_second',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section id="user-stories" className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="userStories_title" className="section-heading">O usuário.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-12 mb-24">
            <h2 id="userStories_title" className="text-7xl lg:text-7xl font-semibold pb-2">Remind.</h2>
            <h2 id="userStories_subtitle" className="section-heading text-5xl lg:text-5xl font-semibold pl-12 pt-1">Comunicação</h2>
            <h2 id="userStories_subtitle" className="section-heading text-5xl lg:text-5xl font-semibold pl-24 pt-1">descomplicada</h2>
            <h2 id="userStories_subtitle" className="section-heading text-5xl lg:text-5xl font-semibold pl-40 pt-1">para equipes.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">

            <div className="flex flex-col w-full relative">
              <div className="userStories-video-container">
                <div className="overflow-hidden flex-1 h-[100vh] relative">

                  {/* Persona-01 */}
                  <img src="https://images.unsplash.com/photo-1618088129969-bcb0c051985e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="titanium" className="userStories-video g_grow" />
                    <div className="userStories-video-container g_grow flex-1 flex-center" 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '15%',
                            right: '25%'
                          }}>
                      <p className="userStories-video g_grow italic">
                      <span className="text-white font-bold">
                        &quot;Remind é a solução perfeita!<br/>
                        </span>
                        Os membros da equipe sempre alinhados, <br/> 
                        e informados. Mesmo para mudanças em <br/>
                        última hora nos projetos.&quot;<br/>
                      </p>
                  </div>
                </div>
                <div className="overflow-hidden flex-1 h-[100vh]">
                  
                  {/* Persona-03 */}
                  <img src="https://images.unsplash.com/photo-1584853538847-f3405f62b905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="titanium 2" className="userStories-video g_grow" />
                  <div className="userStories-video-container g_grow flex-1 flex-center" 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '61%',
                            right: '25%'
                          }}>
                      <p className="userStories-video text-zinc g_grow italic">
                      <span className="text-zinc font-semibold">
                      &quot;Remind melhora o desempenho da equipe!<br/>
                        </span>
                        Percebo o trabalho em equipe em sintonia, <br/> 
                        muito mais eficiente a comunicação e sem <br/>
                        re-trabalhos e discussões desnecessárias.&quot;<br/>
                      </p>
                  </div>
                </div>
              </div>

              <div className="userStories-text-container">
                <div className="flex-1 flex-center">
                  <p className="userStories-text g_text" style={{textAlign: 'left'}} >
                  <span className="text-white">
                    João Carlos
                    </span> é Gerente de Projetos e responsável por coordenar grandes equipes. {' '}
                    
                    Buscava uma ferramenta que permisse melhor visualização e organização de tarefas delegadas aos membros da equipe, para melhorar a produtividade.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                <p className="userStories-text g_text" style={{textAlign: 'left'}} >
                  <span className="text-white">
                    Carlos Eduardo 
                    </span> é Designer Gráfico em uma agência de publicidade. {' '}
                    
                    Procurava uma maneira eficiente e centralizada de receber comunicações e solicitações de outros membros da equipe, como revisão feitas pelos clientes.
                  </p>
                </div>


              </div>
            </div>
          </div >

          <div className="mb-12 w-full h-[15vh]">
            {/* Espaçamento entre os blocos */}
          </div>

          {/* Segundo bloco */}
          <div className="flex-center flex-col sm:px-10">

            <div className="flex flex-col w-full relative">
              <div className="userStories-video-container">
                <div className="overflow-hidden flex-1 h-[100vh] relative">
                  
                  {/* Persona-04 */}
                  <img src="https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="titanium" className="userStories-video g_grow" />
                    <div className="userStories-video-container g_grow flex-1 flex-center" 
                          style={{
                            position: 'absolute',
                            top: '9%',
                            left: '10%',
                            right: '25%'
                          }}>
                      <p className="text-zinc userStories-video g_grow italic">
                      <span className="text-zinc font-semibold">
                      &quot;Remind ajuda muito!<br/>
                        </span>
                        A minha equipe esta sempre na rua. <br/> 
                        Agora todas as mudanças dos clientes <br/>
                        são comunicadas facilmente para a equipe.&quot;<br/>
                      </p>
                  </div>
                </div>
                <div className="overflow-hidden flex-1 h-[100vh]">
                  {/* Persona-06 */}
                  <img src="https://images.unsplash.com/photo-1594540637720-9b14714212f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="titanium 2" className="userStories-video g_grow" />
                  <div className="userStories-video-container g_grow flex-1 flex-center" 
                          style={{
                            position: 'absolute',
                            top: '60%',
                            left: '58%',
                            right: '25%'
                          }}>
                      <p className=" userStories-video g_grow italic">
                      <span className="text-white font-bold">
                      &quot;Remind sempre junto comigo!<br/>
                        </span>
                        A maneira eficaz para gerenciar consultas,<br/> 
                        cirurgias e reuniões. Posso formar uma equipe,<br/>
                        administrar tudo em um só lugar.&quot; <br/>
                      </p>
                  </div>
                </div>
              </div>

              <div className="userStories-text-container">
                <div className="flex-1 flex-center">
                  <p className="userStories-text g_text_second" style={{textAlign: 'left'}} >
                  <span className="text-white">
                    Fernanda Lima 
                    </span> é arquiteta em um escritório renomado. Desenvolve projetos de interiores. {' '}
                    
                    Gerencia uma grande equipe que trabalha fora do escritório e precisa manter atualizadas as tarefas e prazos com a equipe.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                <p className="userStories-text g_text_second" style={{textAlign: 'left'}} >
                  <span className="text-white">
                    Luísa Rocha 
                    </span> é médica cardiologista e dedica-se ao cuidado de pacientes e à pesquisa ciêntifica. {' '}
                    
                    Estava frustrada com a necessidade de uso de diferentes plataformas tornando a comunicação confusa e ineficiente.
                  </p>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UserStories
