var SeqGen =  {
    currVal: 0,
    next: function() {
        this.currVal = this.currVal + 1;
        return this.currVal;
    },
    startAt: function(startVal) {
    	this.currVal=startVal;
    },
};

module.exports = SeqGen;