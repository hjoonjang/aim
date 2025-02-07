import * as React from 'react';

import { PipelineStatusEnum } from 'modules/core/engine/types';

import emptyBookmarks from 'assets/illustrations/emptyBookmarks.svg';
import emptySearch from 'assets/illustrations/emptySearch.svg';
import exploreData from 'assets/illustrations/exploreData.svg';
import wrongSearch from 'assets/illustrations/wrongSearch.svg';

import { DOCUMENTATIONS } from 'config/references';

import { IllustrationType } from '.';

const ILLUSTRATION_TYPES: Record<string, IllustrationType> = {
  Never_Executed: PipelineStatusEnum.Never_Executed,
  Insufficient_Resources: PipelineStatusEnum.Insufficient_Resources,
  Empty: PipelineStatusEnum.Empty,
  Failed: PipelineStatusEnum.Failed,
  Empty_Bookmarks: 'emptyBookmarks',
};

const ILLUSTRATION_LIST: Record<IllustrationType, string> = {
  [ILLUSTRATION_TYPES.Never_Executed]: exploreData,
  [ILLUSTRATION_TYPES.Insufficient_Resources]: exploreData,
  [ILLUSTRATION_TYPES.Empty]: emptySearch,
  [ILLUSTRATION_TYPES.Failed]: wrongSearch,
  [ILLUSTRATION_TYPES.Empty_Bookmarks]: emptyBookmarks,
};

function getDefaultIllustrationContent(
  type: IllustrationType = ILLUSTRATION_TYPES.Never_Executed,
): React.ReactNode {
  const Never_Executed = (
    <>
      It’s super easy to search Aim experiments. Just start typing your query in
      the search bar above.
      <br />
      Look up
      <a
        className='qlAnchor'
        href={DOCUMENTATIONS.EXPLORERS.SEARCH}
        target='_blank'
        rel='noreferrer'
      >
        search docs
      </a>
      to learn more.
    </>
  );
  const Failed = 'Incorrect Query';
  const Insufficient_Resources = "You don't have any tracked data";
  const Empty = 'No Results';
  const Empty_Bookmarks = "You don't have any saved bookmark";

  const CONTENT = {
    [ILLUSTRATION_TYPES.Never_Executed]: Never_Executed,
    [ILLUSTRATION_TYPES.Failed]: Failed,
    [ILLUSTRATION_TYPES.Insufficient_Resources]: Insufficient_Resources,
    [ILLUSTRATION_TYPES.Empty]: Empty,
    [ILLUSTRATION_TYPES.Empty_Bookmarks]: Empty_Bookmarks,
  };
  return CONTENT[type] || null;
}

export { ILLUSTRATION_TYPES, ILLUSTRATION_LIST, getDefaultIllustrationContent };
