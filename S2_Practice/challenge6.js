function votingSystem(votes) {

    if (votes.length === 0) {
      return "There is not vote yet";
    }
  
    let voteCount = { A: 0, B: 0, C: 0 };
  
    for (let i = 0; i < votes.length; i++) {
      if (voteCount.hasOwnProperty(votes[i])) {
        voteCount[votes[i]]++;
      }
    }
  
    let maxVotes = Math.max(voteCount.A, voteCount.B, voteCount.C);
  
    // Check if there's a tie
    let winners = [];
    if (voteCount.A === maxVotes) winners.push('A');
    if (voteCount.B === maxVotes) winners.push('B');
    if (voteCount.C === maxVotes) winners.push('C');
  
    if (winners.length === 1) {
      return `${winners[0]} is the winner`;
    } else {
      return `${winners.join(' and ')} are both winners`;
    }
}
  
  // Example usage:
console.log(votingSystem(['A', 'B', 'A', 'C', 'A'])); 
console.log(votingSystem(['A', 'B', 'B', 'C', 'A'])); 
console.log(votingSystem([])); 
  