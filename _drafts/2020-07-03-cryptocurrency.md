Ledger (contains all the payments being made)needs trust for it to work

Each person has public and private key

Signature = Sign(Message, private key)
Verify(Message, Signature, public key) = True/False
Is this signature signed with the private key associated with this public key?
256 bit signature makes it hard to guess -- could only produce if they knew the private key associated with the public key

Each transaction also has a unique ID associated with it, to prevent duplication of the entire message + signature
so the signature of each transaction will be different, even if it’s duplicated

Disconnect ledger from real world cash
Prevent spending on the ledger more than the person is carrying

Bitcoin = ledger: history of transactions

