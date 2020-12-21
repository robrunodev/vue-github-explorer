import styled from 'vue-styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #A8A8B3;
        transition: color .2s;

        &:hover{
            color: ${shade(0.5, '#A8A8B3')};
        }

        svg {
            margin-right: 4px;
        }

    }
`;

export const RepositoryInfo = styled.div`

    margin-top: 80px;

    header {
        display: flex;
        align-items: center;


        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        div {
            margin-left: 25px;

            strong, p {
                display: block;
            }

            strong {
                font-size: 36px;
                color: #3D3D4D;
            }

            p {
                font-size: 20px;
                color: #737380;
                margin-top: 5px;
            }

        }
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin-top: 30px;

        li + li {
            margin-left: 80px;
        }

        strong, span{
            display: block;
        }

        strong {
            font-size: 36px;
            color: #3D3D4D;
        }

        span {
            font-size: 20px;
            color: #6C6C80;
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

    a {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        text-decoration: none;
        transition: transform .2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        div {
            flex: 1;

            strong, p {
                display: block;
            }

            strong {
                font-size: 24px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 5px;
            }
        }

        svg {
            color: #C9C9D4;
        }
    }
`;
