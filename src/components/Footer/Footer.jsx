import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    background-color: #F2F2F2;
    padding: 6rem 3rem 1rem 3rem;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    color: #888;
    font-family: 'Roboto';
`;

const Link = styled.a`
    cursor: pointer;
    margin: 0 3rem 0 0.8rem;
`;

const IconWrapper = styled.div`
    background-color: #fff;
    border-radius: 100%;
    color: #555;
    display: inline-block;
    font-size: 1.2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    width: 2.5rem;
    text-align: center;
`;

const Copyright = styled.div`
    color: #bbb;
    font-size: 0.9rem;
    margin: 0 0 2.5rem 0;
    padding: 0;
    text-align: center;
    padding-top: 2.5rem;
    font-family: 'Roboto';
`;

const Footer = () => {
    return (
        <Wrapper>
            <Icons>
                <div>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="#555" />
                    </IconWrapper>
                    <Link >1234 Fictional Street #5432 Nashville, TN 00000-0000</Link>
                </div>
                <div>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faPhone} color="#555" />
                    </IconWrapper>
                    <Link >(000) 000-0000</Link>
                </div>
                <div>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faEnvelope} color="#555" />
                    </IconWrapper>
                    <Link >info@untitled.tld</Link>
                </div>
            </Icons>

            <Copyright>
                © Untitled. All rights reserved.
            </Copyright>
        </Wrapper>
    );
}

export default Footer;