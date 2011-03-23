define(["coweb/jsoe/ContextVector"],function(a){var b=function(a){if(a===undefined)this.type=null;else if(a.state)this.setState(a.state),this.origPosition=this.position,this.origContextVector=this.contextVector.copy();else{this.siteId=a.siteId,this.contextVector=a.contextVector,a.origContextVector?this.origContextVector=a.origContextVector:this.origContextVector=this.contextVector.copy(),this.key=a.key,this.value=a.value,this.position=a.position,a.origPosition?this.origPosition=a.origPosition:this.origPosition=this.position;if(a.seqId!==undefined)this.seqId=a.seqId;else if(this.contextVector)this.seqId=this.contextVector.getSeqForSite(this.siteId)+1;else throw new Error("missing sequence id for new operation");this.immutable=!1}};b.prototype.getState=function(){var a=[this.type,this.key,this.value,this.position,this.contextVector.sites,this.seqId,this.siteId];return a},b.prototype.setState=function(b){this.key=b[1],this.value=b[2],this.position=b[3],this.contextVector=new a({state:b[4]}),this.seqId=b[5],this.siteId=b[6]},b.prototype.copy=function(){if(!this.immutable)return this;var a={siteId:this.siteId,seqId:this.seqId,origContextVector:this.origContextVector,contextVector:this.contextVector.copy(),key:this.key,value:this.value,position:this.position,origPosition:this.origPosition},b=new this.constructor(a);return b},b.prototype.compare=function(a){var b=this.contextVector.compare(a.contextVector);if(b===0)return this.siteId<a.siteId?-1:this.siteId>a.siteId?1:0;return b},b.prototype.copyContextVector=function(){return this.contextVector.copy()},b.prototype.transformMethod=function(){throw new Error("transformMethod not implemented")},b.prototype.transformWithUpdate=function(a){throw new Error("transformWithUpdate not implemented")},b.prototype.transformWithInsert=function(a){throw new Error("transformWithInsert not implemented")},b.prototype.transformWithDelete=function(a){throw new Error("transformWithDelete not implemented")};return b})