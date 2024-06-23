import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import { MARKET_DATA, SPORTS_STORIES } from "../../data";
import { QUERIES } from "../../constants";
import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStoriesContainer>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportsStoriesContainer>
      </SportsSection>
    </Wrapper>
  );
};

const SportsStoriesContainer = styled.div`
  overflow: auto;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
    "markets"
    "sports";
  @media ${QUERIES.desktopAndUp} {
    grid-template-areas: "markets sports";
    grid-template-columns: 1fr 1fr;
    gap: 0px;
  }
`;

const MarketsSection = styled.section`
  grid-area: markets;
  @media ${QUERIES.desktopAndUp} {
    padding-right: 16px;
    border-right: solid 1px ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(184px, 100%), 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  margin-left: 16px;
  grid-area: sports;
  display: grid;
  gap: 16px;
  grid-template-rows: 32x 1fr;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(184px, 100%), 1fr));
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
