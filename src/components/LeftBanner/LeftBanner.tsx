import React from 'react';
import { Divisor, LeftBannerContent, MentionAuthor, MentionMessage } from './LeftBannerStyle';

function LeftBanner(): JSX.Element {
  return (
    <LeftBannerContent>
      <MentionMessage>
        &quot;Great, kid. Don&apos;t <br />
        get cocky.&quot; 
      </MentionMessage>
      <Divisor />
      <MentionAuthor className="mention-author">
        Han Solo
      </MentionAuthor>
    </LeftBannerContent>
  );
}

export default LeftBanner;
