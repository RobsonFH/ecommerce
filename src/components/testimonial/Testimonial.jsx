import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Clientes</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Comentarios <span className=' text-blue-800'>dos nossos</span> clientes</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Quero expressar minha imensa satisfação com a minha última compra em sua loja. Fiquei impressionado não apenas com a incrível variedade de brinquedos, mas também com o atendimento excepcional que recebi.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lucas Silveira</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Instagram</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Estou escrevendo para expressar minha alegria e gratidão pela experiência de compra incrível que tive recentemente em sua loja. Encontrar o presente perfeito para o aniversário do meu sobrinho nunca foi tão fácil e prazeroso.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pamela Galvão</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Instagram</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Os funcionários foram extremamente prestativos, oferecendo orientação e sugestões que tornaram minha experiência de compra muito mais fácil e agradável. Além disso, a qualidade dos brinquedos é excepcional - meu filho ficou absolutamente encantado com o presente que escolhemos juntos.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Marcio Tech</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial