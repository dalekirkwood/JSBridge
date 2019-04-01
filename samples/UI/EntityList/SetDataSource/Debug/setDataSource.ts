﻿/// <reference path="JSBridge.d.ts"/>

/** Display custom data source by adding filter to default source fetch on account entity view. */
function setDataSource() {
	var dataSource = new MobileCRM.UI.ListDataSource();
}

window.onload = () => {
	/** If iFrame property 'Provide data source' is not checked it will be ignored */
	setDataSource();
};