import styled from 'vue-styled-components';
import { shade } from 'polished';

const inputProps = {
  hasError: Boolean,
};

export const Title = styled.h1`
    max-width: 450px;
    font-size: 48px;
    color: #3A3A3A;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled('form', inputProps)`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    height: 70px;
    border: 0;

    input {
        flex: 1;
        height: 70px;
        border-radius: 5px 0 0 5px;
        border: 0;
        padding: 20px 30px;
        color: #3a3a3a;
        border: 2px solid ${(props) => (props.hasError ? '#c53030' : 'fff')};

        &::placeholder{
            color: #A8A8B3;
        }
    }

    button {
        border-radius: 0 5px 5px 0;
        border: 0;
        width: 210px;
        height:70px;
        background: #04D361;
        color: white;
        transition: background-color .15s;

        &:hover {
            background-color: ${shade(0.2, '#04D361')};
        }
    }
`;

export const Repositories = styled.div`
    max-width: 700px;
    margin-top: 80px;

    a{
        background-color: #fff;
        display: block;
        border-radius: 5px;
        width: 100%;
        padding: 20px;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
                display: block;
            }

            p {
                margin-top: 4px;
                font-size: 16px;
                color: #A8A8B3;
                display: block;
                line-height: 21px;
            }
        }

        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color:  #c53030;
`;
