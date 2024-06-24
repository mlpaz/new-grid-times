import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";
import { COLORS } from "../../constants";
import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              <SecondaryStory key={story.id} {...story} />
              <Separator />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              <OpinionStory key={story.id} {...story} />
              <Separator />
            </>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Separator = styled.div`
  &:not(:last-child) {
    margin: 16px 0;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 48px 0px;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    border-right: solid 1px ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.desktopAndUp} {
    padding-left: 16px;
    border-right: solid 1px ${COLORS.gray[300]};
    margin-bottom: 16px;
    padding-bottom: 16px;
    padding-right: 16px;
  }
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionSection = styled.section`
  margin-top: -8px;
  @media ${QUERIES.desktopAndUp} {
    padding-left: 16px;
    margin-bottom: 16px;
  }

  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  @media ${QUERIES.desktopAndUp} {
    border-top: solid 1px ${COLORS.gray[300]};
    padding-top: 16px;
    margin-left: 16px;
  }

  grid-area: advertisement;
`;

export default MainStoryGrid;
