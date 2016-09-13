var TRUE = function(a) {
	return function(b) {
		return a;
	}
}

var FALSE = function(a) {
	return function(b) {
		return b;
	}
}

var NOT = function(b) {
	return b(FALSE)(TRUE);
}

var AND = function(a) {
	return function(b) {
		return a(b)(FALSE);
	}
}

var OR = function(a) {
	return function(b) {
		return a(TRUE)(b);
	}
}

var XOR = function(a) {
	return function(b) {
		return a(NOT(b))(b);
	}
}

var IF = function(p) {
	return function(a) {
		return function(b) {
			return p(a)(b);
		}
	}
}

var PAIR = function(a) {
	return function(b) {
		return function(FALSE) {
			return FALSE(a)(b);
		}
	}
}

var HEAD = function(p) {
	return p(TRUE);
}

var TAIL = function(p) {
	return p(FALSE);
}

var p1 = PAIR(1)(0);
var p2 = PAIR(2)(p1);

console.log(XOR(FALSE)(TRUE));
