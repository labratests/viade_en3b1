import React from 'react';
import BackButton from "./children/BackButton";
import FriendDropdown from "./children/FriendDropdown";
import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';

async function getNameBy(webId) {
  const webIdDoc = await fetchDocument(webId);
  return webIdDoc.getSubject(webId).getString(foaf.name);
}

const FriendInfo = props => {
    const { webId } = props;
    return (
      <div>
        webId.toString().substring(8).split(".")[0];
      </div>
    );
  
};

export default FriendInfo;