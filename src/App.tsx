import './styles.css';
import { Text } from './components';
import React, { useRef } from 'react';
import Border from './components/Border';

const Emphasis = ({ children }: { children: React.ReactText }) => {
    return (
        <em style={{ background: 'yellow', color: 'black', fontSize: '40px' }}>
            {children}
        </em>
    );
};

export default function App() {
    const ref = useRef<HTMLHeadingElement | null>(null);
    return (
        <div className='App'>
            <Text as='h1' ref={ref}>
                Hello CodeSandbox
            </Text>
            <Text as='h1' color='red' style={{ background: 'black' }}>
                Hello CodeSandbox
            </Text>
            <Text as='a' href='www.google.com'>
                TE LA COMES
            </Text>
            <Text>Hello world</Text>
            <Text data-props={'rico y sabroso'}>Span normal</Text>
            <Text as='div' className='container'>
                Div
            </Text>
            <Text as='p' style={{ color: 'blue', background: 'violet' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores quam minima provident exercitationem iste obcaecati quas
                recusandae eaque tenetur laudantium delectus, inventore quasi?
                Iusto voluptate accusamus repellat commodi sunt dolorem minus
                fuga! Laborum beatae, alias accusantium rerum tenetur aut
                nostrum commodi, neque mollitia maiores autem. Voluptatibus
                mollitia praesentium dignissimos excepturi!
            </Text>
            <Text as='button' color='red'>
                Button
            </Text>

            <Text as={Emphasis}>This is important. You are so uggly</Text>

            <Border
                as='blockquote'
                color='blue'
                width={10}
                variant='solid'
                style={{ color: 'red', fontSize:'35px' }}
            >
                You only truly learn by practicing
            </Border>
        </div>
    );
}
