pragma solidity ^0.4.16;

contract AdSeller {
  address public poster;
  uint256 public bidDueTime;
  address public winner;
  string public adContent;
  uint256 public bidValue;

  constructor(uint256 _bidDueTime) public {
    poster = msg.sender;
    bidDueTime = _bidDueTime;
  }

  function bid(string ad) public payable returns(bool success){
    require(bidDueTime > now);
    
    if(msg.value <= bidValue){
        revert();
        return false;
    }
    else {
        address redeemaddress = winner;
        uint256 redeemvalue = bidValue;
        winner = msg.sender;
        adContent = ad;
        bidValue = msg.value;
        adContent = ad;
        if(redeemaddress != address(0))
          redeemaddress.transfer(redeemvalue);
        return true;
    }
        
    }
}