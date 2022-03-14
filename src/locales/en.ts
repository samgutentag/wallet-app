export default {
  accountAssign: {
    AccountNamePlaceholder: 'Account Name',
  },
  accountHeader: {
    last24: 'Last 24h',
    timeAgo: 'Updated {{formattedChange}}',
  },
  accountImport: {
    alert: {
      body: "This seed phrase doesn't correspond to a Helium account",
      title: 'Error',
    },
    complete: {
      subtitle: 'This will just take a moment.',
      title: 'Recovering Account...',
    },
    confirm: {
      next: 'Submit Seed Phrase',
      subtitle:
        'Here are the {{totalWords}} words you’ve entered. Tap on any of them if you need to edit.',
      title: 'Please Confirm\nSeed Phrase',
    },
    pickKeyType: 'Pick Security Key Type:',
    restoreChoice: '{{totalWords}} Words',
    subTitle:
      'To import your existing\nHNT account, enter its\n<havelockBlue>12</havelockBlue> or <jazzberryJam>24</jazzberryJam> word security key.',
    title: 'Import\nAccount',
    wordEntry: {
      placeholder: '{{ordinal}} word',
      title:
        "Enter your\naccount's <secondaryText>{{totalWords}} word</secondaryText>\nsecurity key...",
    },
  },
  accountSetup: {
    confirm: {
      forgot: 'I forgot my words',
      subtitle: 'Which word below was your <b>{{ordinal}} word?</b>',
      title: 'Confirm\nYour Words',
    },
    confirmPin: {
      subtitle: 'Re-enter your PIN',
      title: 'Repeat PIN',
    },
    createButtonTitle: 'Create an Account',
    createImport: {
      create: 'Create a new Wallet',
      helperText:
        'Coming from Helium App? Use the\nsame 12 words to import an Account.',
      import: 'Import a Wallet',
      title: 'What would\nyou like to do?',
    },
    createPin: {
      subtitle: 'Let’s secure your account with a PIN Code.',
      title: 'Set PIN Code',
    },
    passphrase: {
      next: 'I have written these down',
      subtitle1:
        'Write the words down, keep it safe,\nand never share it with anyone.',
      subtitle2: 'No one can recover these words.',
      title: 'These words\nrepresent your\nprivate key',
    },
    subtitle1:
      'Every new account is accessed via\n24 secure words (your ‘key’).',
    subtitle2: 'Please ensure these are written\ndown and are kept safe.',
    title: 'Create\nNew Account',
  },
  accountsScreen: {
    allFilterFooter:
      "You've reached the end of your recent activity.\nSelect a filter to view more.",
    filterTypes: {
      all: 'All\nTransactions',
      burn: 'Burn\nTransactions',
      hotspotAndValidators: 'Hotspots &\nValidators',
      mining: 'Mining\nRewards',
      payment: 'Payments',
      pending: 'Pending\nTransactions',
    },
    hideFilters: 'Hide Filters',
    myTransactions: 'My Transactions',
    showFilters: 'Show Filters',
  },
  accountView: {
    balance: 'Balance',
    lock: 'Lock',
    payment: 'Payment',
    request: 'Request',
    send: 'Send',
    stake: 'Stake',
  },
  addNewContact: {
    addContact: 'Add Contact',
    address: {
      placeholder: 'e.g. 9h9h9r3hfi04nf0j083...',
      title: 'Enter Helium Address',
    },
    nickname: {
      placeholder: 'e.g. Loki Laufeyson',
      title: 'Enter Nickname',
    },
    title: 'Add New Contact',
  },
  addressBook: {
    addNext: 'Add New...',
    searchContacts: 'Search Contacts...',
    title: 'Address Book',
    qrScanFail: {
      message: 'This QR scanner supports wallet addresses only.',
      title: 'Unsupported QR Code',
    },
  },
  auth: {
    enterCurrent: 'Enter your current PIN to continue',
    error: 'Incorrect PIN',
    signOut: 'Sign Out',
    signOutAlert: {
      body: 'You are signing out of all your accounts. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your Address Book\n- your HNT\n- your Wallet',
      title: 'Warning! Sign out of all accounts?',
    },
    title: 'Enter Your PIN',
  },
  editContact: {
    delete: 'Delete',
    deleteConfirmMessage:
      'Are you sure you want to delete your contact, {{alias}}?',
    deleteConfirmTitle: 'Delete Contact?',
    save: 'Save',
    title: 'Edit Contact',
  },
  generic: {
    account: 'Account',
    back: 'Back',
    cancel: 'Cancel',
    clear: 'Clear',
    confirm: 'Confirm',
    copied: 'Copied {{target}}',
    error: 'Error',
    fee: 'Fee',
    mainnet: 'Mainnet',
    next: 'Next',
    ok: 'OK',
    retry: 'Retry',
    share: 'Share',
    skip: 'Skip',
    success: 'Success',
    testnet: 'Testnet',
    total: 'Total',
  },
  hntKeyboard: {
    enterAmount: 'Enter {{ticker}} Amount',
    fee: '+{{value}} Fee ⓘ',
    hntAvailable: '{{amount}} Available',
    validFor: 'valid for {{time}}',
  },
  intro: {
    subtitle: 'Setup should only take\na few minutes.',
    tap: 'Tap to get started',
    title: 'The best wallet\nfor your HNT.',
  },
  linkWallet: {
    body: 'By Linking Helium Wallet to {{appName}}, you can safely sign blockchain transactions without re-entering your seed phrase.',
    no: 'No, Cancel',
    title: 'Link Helium Wallet\nto {{appName}}?',
    yes: 'Yes, Link my Wallet',
  },
  wifi: {
    authFailed: 'Failed to authorize',
    burnFailed: 'Failed to burn',
    change: 'Change',
    confirmPayment: 'Confirm Payment',
    data: 'Data',
    howMuch: 'How much data',
    insufficientFunds: 'Insufficient Funds',
    macFailed: 'Failed to enable mac',
    minutes: 'Minutes',
    remainingBalance: 'Remaining\nBalance',
    done: 'Done',
  },
  notifications: {
    accountUpdates: '{{title}} Updates',
    emptyTitle: 'No Notifications',
    heliumUpdates: 'Helium Updates',
    title: 'Notifications',
    walletUpdates: 'Wallet Updates',
  },
  onboarding: {
    create: '+ New',
    import: '+ Import',
  },
  ordinals: [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
  ],
  payment: {
    addRecipient: '+ Add Recipient',
    backToAccounts: 'Back to Accounts',
    enterAmount: 'Enter {{ticker}} Amount',
    enterMemo: 'Enter Memo (Optional)',
    fee: '+{{value}} Fee',
    insufficientFunds: 'Insufficient Funds',
    max: 'Max',
    memoBytes: '{{used}}/{{total}} Bytes',
    pay: 'Pay',
    qrScanFail: {
      message:
        'This QR scanner supports payment transactions and wallet addresses.',
      title: 'Unsupported QR Code',
    },
    selectContact: 'Select Contact',
    selfPay: 'Self Pay',
    sendButton: 'Swipe to Send {{ticker}}',
    sending: 'Sending...',
    submitError:
      'There was an error submitting this transaction. Please try again.\n\n{{details}}',
    submitFailed: 'Transaction\nFailed',
    submitSuccess: 'Transaction\nSubmitted',
    title: 'Send {{ticker}}',
    total: 'Total',
    totalRecipients: '{{count}} Recipient',
    totalRecipients_one: '{{count}} Recipient',
    totalRecipients_other: '{{count}} Recipients',
    totalRecipients_plural: '{{count}} Recipients',
  },
  placeholder: {
    accountBalanceValue: 'Account Balance: {{balance}}',
    enterAccountAddress: 'Enter Account Address',
    fetchMoreActivity: 'Fetch More Activity',
    getAccountData: 'Get Account Data',
  },
  request: {
    amount: 'Amount (Optional)',
    copied: 'Link has been copied to your clipboard',
    enterAmount: 'Enter {{ticker}} Amount',
    link: 'Link',
    memo: 'Memo',
    payee: 'Payee',
    qr: 'QR',
    title: 'Generate Request',
  },
  settings: {
    revealWords: {
      next: 'I have written these down',
      subtitle:
        '<secondaryText>It is crucial you write all of these\n{{numWords}} words down, in order.</secondaryText><red500>\n\nHelium cannot recover these words.</red500>',
      title: 'Your {{numWords}} Word\nPassword',
      warning: 'Helium cannot recover these words',
    },
    sections: {
      account: {
        alias: 'Account Alias',
        copyAddress: 'Copy Address',
        revealWords: 'Reveal Words',
        signOut: 'Sign Out',
        signOutAlert: {
          body: 'You are signing out of your account, {{alias}}. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your HNT\n- your Wallet',
          bodyLastAccount:
            'You are signing out of your only account, {{alias}}. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your Address Book\n- your HNT\n- your Wallet',
          title: 'Sign Out of {{alias}}?',
        },
        title: 'Account Settings',
      },
      app: {
        convertHntToCurrency: 'Convert HNT to Currency',
        currency: 'Currency',
        language: 'Language',
        title: 'App Settings',
        version: 'App Version',
      },
      dev: {
        testnet: {
          enablePrompt: {
            getTnt: 'Get TNT',
            message:
              'Importing and Creating Testnet accounts enabled. To acquire TNT (Testnet tokens), go to faucet.helium.wtf.',
            title: 'Enable Testnet Access',
          },
          helperText: 'To disable Testnet, signout of of\nall Testnet accounts',
          title: 'Enable Testnet',
        },
        title: 'Developer Settings',
      },
      security: {
        authIntervals: {
          after_1_hr: 'After 1 hour',
          after_1_min: 'After 1 minute',
          after_4_hr: 'After 4 hours',
          after_5_min: 'After 5 minutes',
          after_15_min: 'After 15 minutes',
          immediately: 'Immediately',
        },
        enablePin: 'Enable PIN',
        requirePin: 'Require PIN',
        requirePinForPayments: 'Require PIN for Payments',
        resetPin: 'Reset PIN',
        title: 'Security Settings',
      },
    },
    title: 'Settings',
  },
  signHotspot: {
    elevation: 'Elevation:',
    error: {
      subtitle:
        'Unable to add this Hotspot to the Helium Network. Contact {{maker}} to troubleshoot this issue.',
      takeMeBack: 'Go Back to {{maker}}',
      title: 'Invalid Link',
    },
    gain: 'Gain:',
    location: 'Location:',
    maker: 'Maker:',
    name: 'Hotspot Name:',
    newOwner: 'New Owner:',
    owner: 'Owner:',
    title: 'Add Hotspot to\nBlockchain?',
    titleLocationOnly: 'Update Location?',
    titleTransfer: 'Transfer Hotspot?',
  },
  transactions: {
    added: 'Hotspot Added to Blockchain',
    addToAddressBook: {
      message: 'Would you like to add this wallet to your address book?',
      title: 'Add to Address Book',
    },
    amount: 'Amount',
    amountToPayee: 'Amount to Payee {{index}}',
    amountToSeller: 'Amount to Seller',
    block: 'Block',
    burnHNT: 'Burn {{ticker}}',
    buyer: 'Buyer',
    date: 'Date',
    feePaidBy: 'Fee paid by {{feePayer}}',
    from: 'From',
    hash: 'Hash',
    hotspot: 'Hotspot',
    location: 'Confirm Location',
    location_v2: 'Update Location',
    memo: 'Memo',
    mining: 'Mining Rewards',
    newAddress: 'New Address',
    newOwner: 'New Owner',
    oldAddress: 'Old Address',
    oldOwner: 'Old Owner',
    owner: 'Owner',
    payee: 'Payee {{index}}',
    pending: {
      inProcess: 'In Process',
      pending: 'Pending',
      sending: 'Payment Sending...',
    },
    received: 'Received {{ticker}}',
    rewardTypes: {
      consensus: 'Consensus',
      data_credits: 'Packet Transfer',
      overages: 'Overages',
      poc_challengees: 'PoC',
      poc_challengers: 'Challenger',
      poc_witnesses: 'Witness',
      securities: 'Security Tokens',
    },
    seller: 'Seller',
    sent: 'Sent {{ticker}}',
    stake: 'Stake',
    stakeAmount: 'Stake Amount',
    stakeValidator: 'Stake {{ticker}}',
    stakingFee: 'Staking Fee',
    totalAmount: 'Total Amount',
    transaction: 'Transaction',
    transfer: 'Hotspot Transfer',
    transferBuy: 'Transfer Hotspot (Buy)',
    transferSell: 'Transfer Hotspot (Sell)',
    transferValidator: 'Transfer Stake',
    txnFee: 'Transaction Fee',
    txnFeePaidBy: 'Transaction Fee paid by {{feePayer}}',
    unstakeValidator: 'Unstake {{ticker}}',
    validator: 'Validator',
  },
}
